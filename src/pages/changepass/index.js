import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { changePass } from "../../services/userServices";

function Changepass() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
     const username = e.target[0].value;
    const password = e.target[1].value;
    const newPass = e.target[2].value;
    const reNewPass = e.target[3].value;

    if (newPass !== reNewPass) {
      Swal.fire({
        icon: "error",
        title: "Incorrect re-entered password!",
        showConfirmButton: false,
        timer: 1500
      });
    } 
    else {
      const options = {
        username: username,
        password: password,
        newpass: newPass,
      }
      const response = await changePass(options);

      if (response.code === 200) {
        Swal.fire({
          icon: "success",
          title: "Password change successfull!",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          navigate("/login");  
        }, 1000);
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Incorrect email or password!",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  }
  return (
    <>
      <div className="container-register">
        <div className="login-form-register" style={{height: 500}}>
          <form className="form-register" onSubmit={handleSubmit} style={{height: 500, width: 350, padding: "15px 30px 30px 30px"}}>
            <div className="title-register">Change Password</div>
            <div className="label-register">Username</div>
            <input className="input-register" type="username" placeholder="Nhập tên đăng nhập" />
            <div className="label-register">Old-Password</div>
            <input className="input-register" type="password" placeholder="Nhập mật khẩu cũ" />
            <div className="label-register">New-Password</div>
            <input className="input-register" type="password" placeholder="Nhập mật khẩu mới" />
            <div className="label-register">Re-enter Password</div>
            <input className="input-register" type="password" placeholder="Nhập lại mật khẩu mới" />
            <button className="btn-register" type="submit">
              Change
            </button>
          </form>
          <div className="content-right-register">
            <div className="title-content-register">Welcome to change</div>
            <div className="question-register">Have an account?</div>
            <button className="navigate-register"><NavLink to="/login">Sign In</NavLink></button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Changepass;