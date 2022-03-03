import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StartTimeSelect from '../../../components/startTimeSelect';
import RoleSelect from './roleSelect';
import { useHistory } from 'react-router-dom';

function ModifyAccount( { closeModal, memberId } ) {
  const [data, setData] = useState(false);
  const [baseImage, setBaseImage] = useState("");
  const access_token = sessionStorage.getItem("token")

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("")
  const [role, setRole] = useState("");

  let history = useHistory();

  const postdata = async () => {
    try {
      const roomInfo = await axios({
        url: `https://arr-dev.azurewebsites.net/api/v1/webs/admin-information/${memberId}`,
        headers: {
            'Authorization': 'Bearer ' + access_token
            },
        method: "GET",
        data: {
        }
    })
    .then((res) => {
      setUserName(res.data.data[0].userName)
      setFirstName(res.data.data[0].firstName)
      setLastName(res.data.data[0].lastName)
      setPassword(res.data.data[0].password)
      setBaseImage(res.data.data[0].profileUrl)
      setRole(res.data.data[0].role)
    });
    } catch (err) {
      console.log(err);
    }
  };

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
    console.log(role.value)

    try {
     await axios({
        url: "https://arr-dev.azurewebsites.net/api/v1/webs/modify-admin",
        headers: {
            'Authorization': 'Bearer ' + access_token
            },
        method: "POST",
        data: {
          Id : memberId,
          FirstNameEn : firstName,
          LastNameEn : lastName,
          UserName : userName,
          Password : password,
          MemberPivtureUrl : baseImage,
          RoleId : role.value
        }
    })
    .then((res) => {
      alert("The account has been modified")
      history.push("/adminManagement")
      window.location.reload("/adminManagement");
     });
    } catch (err) {
      console.log(err.response)
      alert("Failed to midify account")
      setData(true)
    }
 };

  useEffect(() => {
    postdata();
  },[]);

    return(
        <div>
            <div className="createAccount-modal">
                <div className="createAccount-modalContainer">
                    <div className="title">MODIFY ACCOUNT</div>
                    <div className="body">
                        <form className="new-col-12">            
                            <label className="col-6 firstForm">First Name</label>
                            <label className="col-6 secondForm">Last Name</label>
                            <textarea className="size" placeholder={firstName} onChange={event => setFirstName(event.target.value)} required></textarea>
                            <textarea className="size  secondP" placeholder={lastName} onChange={event => setLastName(event.target.value)} required></textarea>

                            <div className='rowWWWW'>
                            <label className="col-6 firstForm">User Name</label>
                            <label className="col-6 secondForm">Profile Image</label>
                            <textarea className="size" placeholder={userName} onChange={event => setUserName(event.target.value)} required></textarea>
                            <input type="file" className="col-6 size form-control thirdP" id="customFile" onChange={(e) => {uploadImage(e);}}></input>
                            </div>

                            <label className="col-6 firstForm">Password</label>
                            <label className="col-6 secondForm">Confirm Password</label>
                            <textarea className="size" placeholder={password} onChange={event => setPassword(event.target.value)} required></textarea>
                            <textarea className="size  secondP" placeholder={"Confirm Password"} onChange={event => setConfirmPassword(event.target.value)} required></textarea>

                            <label className="col-6 firstForm">Role</label>
                            <RoleSelect onChange={onChangeInputRole} className="size zero" oldValue={role}/>
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

export default ModifyAccount;