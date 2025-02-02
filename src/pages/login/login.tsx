
const LoginPage = () => {
    return (
        <>
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <button>Login In</button>


            <label htmlFor="remember-me">Remember me</label>
            <input type="checkbox" id="remember-me" />

            <a href="#">Forgot Password</a>


        </>
    )
}

export default LoginPage