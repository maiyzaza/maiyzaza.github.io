import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StartTimeSelect from '../../../components/startTimeSelect';
import RoleSelect from './roleSelect';
import { useHistory } from 'react-router-dom';

function CreateAccount( { closeModal,roomId } ) {

  const [data, setData] = useState(false);
  const [baseImage, setBaseImage] = useState("");
  const access_token = sessionStorage.getItem("token")

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [profileImg,setProfileImg] = useState([]);
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("")
  const [role, setRole] = useState("");

  let history = useHistory();

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function onChangeInputRole(value){
    setRole(value)
  }

  const onClick = async (event) => {

    console.log(firstName)
    console.log(lastName)
    console.log(userName)
    console.log(password)
    console.log(baseImage)

    try {
     await axios({
        url: "https://arr-dev.azurewebsites.net/api/v1/webs/new-admin",
        headers: {
            'Authorization': 'Bearer ' + access_token
            },
        method: "POST",
        data: {
          FirstNameEn : firstName,
          LastNameEn : lastName,
          UserName : userName,
          Password : password,
          MemberPivtureUrl : baseImage,
          RoleId : role.value
        }
    })
    .then((res) => {
      alert("Your account has been created")
      history.push("/adminManagement")
      window.location.reload("/adminManagement");
     });
    } catch (err) {
      console.log(err.response.data.message)
      alert(err.response.data.message)
      setData(true)
    }
 };

  useEffect(() => {
    // postdata();
  },[]);

    return(
        <div>
            <div className="createAccount-modal">
                <div className="createAccount-modalContainer">
                    <div className="title">CREATE ACCOUNT</div>
                    <div className="body">
                        <form className="new-col-12">            
                            <label className="col-6 firstForm">First Name</label>
                            <label className="col-6 secondForm">Last Name</label>
                            <textarea className="size" placeholder={"First Name"} onChange={event => setFirstName(event.target.value)} required></textarea>
                            <textarea className="size  secondP" placeholder={"Last Name"} onChange={event => setLastName(event.target.value)} required></textarea>

                            <div className='rowWWWW'>
                            <label className="col-6 firstForm">User Name</label>
                            <label className="col-6 secondForm">Profile Image</label>
                            <textarea className="size" placeholder={"User Name"} onChange={event => setUserName(event.target.value)} required></textarea>
                            <input type="file" className="col-6 size form-control thirdP" id="customFile" onChange={(e) => {uploadImage(e);}}></input>
                            </div>

                            <label className="col-6 firstForm">Password</label>
                            <label className="col-6 secondForm">Confirm Password</label>
                            <textarea className="size" placeholder={"Password"} onChange={event => setPassword(event.target.value)} required></textarea>
                            <textarea className="size  secondP" placeholder={"Confirm Password"} onChange={event => setConfirmPassword(event.target.value)} required></textarea>

                            <label className="col-6 firstForm">Role</label>
                            <RoleSelect onChange={onChangeInputRole} className="size zero" oldValue={null}/>
                        </form>
                    </div>

                    <div className="footer">
                        <button className="btn btn-danger btn-sm" onClick={onClick} type="button">Save</button>
                        <button className="btn btn-primary btn-sm" type="button" onClick={() => closeModal(false)} id="cancelLogOut">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;