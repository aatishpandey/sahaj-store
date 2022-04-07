import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="form-main">
            <div className="cart-head">Login</div>
            <form className="form nav--shadow">
                <label htmlFor="email" className="card-head">
                    Enter Your Email
                </label>
                <input className="form-input" type="email" id="email" />
                <label htmlFor="pass" className="card-head">
                    Enter Your Password
                </label>
                <input className="form-input" type="password" id="pass" />

                <div className="forgot-pass">
                    <label htmlFor="remem" className="remem-fl">
                        <input type="checkbox" id="remem" />
                        <p className="cart-text">Remember Me?</p>
                    </label>
                    <div className="cart-text">Forgot Password</div>
                </div>

                <button className="btn btn-primary">
                    Login
                </button>

                <Link to="/signup">
                    <div className="cart-text cursor-pointer ">Create New Account?</div>
                </Link>
            </form>
        </div>

    )
}

export { Login }