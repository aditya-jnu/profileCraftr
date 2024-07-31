import React, { useContext, useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

export default function Admin() {
    let{user,userEmail}=useContext(AppContext);

    const fileInputRef = useRef(null); // Create a ref for the file input
    let formData={user:user,name:'',role:'',bio:'',resume:'',linkedin:'',github:'',projects:[{id:0,thumbnail:'',projectName:'',projectGithub:'',projectUrl:''}]};

    const[formInfo, setFormInfo]=useState(formData);
    const newProject={id:formInfo.projects.length,thumbnail:'',projectName:'',projectGithub:'',projectUrl:''};
    const [images, setImage] = useState([]);
    const [active, setActive] = useState(false);
    const navigate=useNavigate();
    const { userID } = useParams();
    console.log("in admin ",userID);

    // ******** functions handle *************
    async function submitHandle(e){
        e.preventDefault();
        try{
            console.log("data sent is ",formInfo)
            const info=await axios.post("http://localhost:5000/api/v1/portfolio/create",formInfo);
            console.log("posted ",info.data)
            navigate(`/portfolio/${userEmail}`);
        }
        catch(err){
            console.log(err,"error occured")
        }
    }

    function changeHandle(e,projectId){
        // **********
        if(e.target.type==='file'){
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage((prevImages) => ({
                    ...prevImages,
                    [projectId]: reader.result
                }));
            };

            setFormInfo((prevState) => ({
                ...prevState,
                projects: prevState.projects.map(project => 
                    project.id === projectId ? { ...project, thumbnail: file } : project
                )
            }));

            if (file) {
                reader.readAsDataURL(file);
             }
        }
        // **********
        else{
            setFormInfo((prevState)=>({
                ...prevState,[e.target.name]:e.target.value
               }))
        }
     
    }
    function addHandle(e){
        e.preventDefault();
        console.log("Add handle")
        setFormInfo((prevState)=>({
            ...prevState,projects:[...prevState.projects,newProject]
        }))
    }

    useEffect(() => {
        console.log("Form info updated:", formInfo);
    }, [formInfo]);
    
    return (
        <div className='p-5'>
            <form encType='multipart/form-data' onSubmit={submitHandle} className='flex flex-col gap-4'>

                <input type="text" name='name' value={formInfo.name} className='bg-navbg w-80 rounded-lg px-2 py-1' placeholder='your name...' onChange={changeHandle} />
                <input type="text" name='role' value={formInfo.role} className='bg-navbg w-80 rounded-lg px-2 py-1' placeholder='your role...' onChange={changeHandle} />
                <textarea name="bio" value={formInfo.bio} className='bg-navbg w-80 rounded-lg px-2 py-1' placeholder='your bio...' onChange={changeHandle}/>
                <input type="text" name='resume' value={formInfo.resume} className='bg-navbg w-80 rounded-lg px-2 py-1' placeholder='your resume url...' onChange={changeHandle} />
                <div className='flex flex-col gap-4'>
                  <input type="text" name='linkedin' value={formInfo.linkedin} className='bg-navbg w-80 rounded-lg px-2 py-1' placeholder='your LinkedIn url...' onChange={changeHandle}/>
                  <input type="text" name='github' value={formInfo.github} className='bg-navbg w-80 rounded-lg px-2 py-1' placeholder='your GitHub url...' onChange={changeHandle}/>
                </div>
                
                {/* ******PROJECTS***** */}
                <div>
                    <div className="text-xl font-medium text-secondary-blue">PROJECTS</div>

                    <div>
                        {formInfo.projects.map((project)=>(
                            <div key={project.id}>
                                {/* ****** file ****** */}
                                <div>
                                    <input type="file" accept="image/*" id={`thumbnail${project.id}`} name='thumbnail' onChange={(e)=>changeHandle(e,project.id)}  style={{ display: 'none' }} ref={fileInputRef}/>
                                    <label htmlFor={`thumbnail${project.id}`}>
                                        {images[project.id]?<img  id="preview" src={images[project.id]} alt="Thumbnail" className='cursor-pointer'
                                        style={{width:'251px', height:'154px'}}/>:<div className='flex items-center cursor-pointer'><p className='border'>Select Thumbnail</p></div>}
                                    </label>
                                </div>
                                {/* ***** project details ****** */}
                                <div className=' flex flex-col gap-1'>
                                    <input type="text" name='projectName'  className='bg-navbg w-60 rounded-lg p-1' placeholder='project name...' onChange={changeHandle}/>
                                    <textarea name="" id="" className='bg-navbg w-60 h-40 rounded-lg p-1' placeholder='Enter description'/>
                                    <input type="text" className='bg-navbg w-60 rounded-lg p-1' placeholder='GitHub url'/>
                                    <input type="text" className='bg-navbg w-60 rounded-lg p-1' placeholder='Live url'/>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={addHandle}>Add more</button>
                </div>

                {/* *****Submit button***** */}
                <button type="submit"className={active?"border rounded-2xl py-1 px-2 bg-secondary-blue text-white w-[500px]":"border border-secondary-blue text-secondary-blue rounded-2xl py-1 px-2 w-[500px]"} onMouseEnter={()=>{setActive(true);}} onMouseLeave={() => {setActive(false);}}>
                        Submit
                </button>            
           </form>
        </div>
    )
}
