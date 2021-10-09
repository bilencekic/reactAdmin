import React from "react";
import "./user.css";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";
import {Link} from "react-router-dom"
export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">    <button className="userAddButton">Create</button></Link>
     
      </div>

      <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://www.denofgeek.com/wp-content/uploads/2021/07/star-trek-discovery-sonequa-martin-green-captain-michael-burnham.jpeg?resize=768%2C432" alt="" className="userShowImage" />
           
            <div className="userShowTopTitle">
                <span className="userShowUsername">Bilen Cekic</span>
                <span className="userShowTitle">Software Engineer</span>
            </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                <PermIdentity className="userShowIcon"/>
                <span className="userShowInfoTitle">bilencekic</span>
                </div>
                <div className="userShowInfo">
                <CalendarToday className="userShowIcon"/>
                <span className="userShowInfoTitle">03.07.1986</span>
                </div>

                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon"/>
                <span className="userShowInfoTitle">012 956 79 30</span>
                </div>
                <div className="userShowInfo">
                <MailOutline className="userShowIcon"/>
                <span className="userShowInfoTitle">bilencekic@gmail.com</span>
                </div>
                <div className="userShowInfo">
                <LocationSearching className="userShowIcon"/>
                <span className="userShowInfoTitle">Kuala Lumpur</span>
                </div>


            </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>

            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" placeholder="bilencekic" className="userUpdateInput"></input>
                    </div>

                    <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input type="text" placeholder="Bilen Cekic" className="userUpdateInput"></input>
                    </div>

                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input type="text" placeholder="bilencekic@gmail.com" className="userUpdateInput"></input>
                    </div>

                    <div className="userUpdateItem">
                        <label>Phone</label>
                        <input type="text" placeholder="+12956" className="userUpdateInput"></input>
                    </div>

                    <div className="userUpdateItem">
                        <label>Location</label>
                        <input type="text" placeholder="Kuala Lumpur" className="userUpdateInput"></input>
                    </div>

                </div>
            <div className="userUpdateRight">
                <div className="userUpdateUpload">
                <img src="https://www.denofgeek.com/wp-content/uploads/2021/07/star-trek-discovery-sonequa-martin-green-captain-michael-burnham.jpeg?resize=768%2C432" alt="" 
                className="userUpdateImage" />
                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                <input type="file" id="file" style={{display: "none"}}/> 
                
                </div>
                <button className="userUpdateButton">Update</button>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
}
