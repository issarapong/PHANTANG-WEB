

export default function RegisterForm() {
  return (
    <>
<form >
  <div className="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required />
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
    <hr />
    <p>By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.</p>
    
<div className="flex gap-3 max-w-sm">
  <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600">Confirm</button>
  <button className="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800">Cancel</button>

</div>



  </div>
  <div className="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</form>

</>
  )
}
