import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <div className="form-main">
            <div className="cart-head">Signup</div>
            <form className="form nav--shadow">
                <label htmlFor="email" className="card-head">
                    Enter Your Email
                </label>
                <input className="form-input"
                    type="email" id="email" />
                <label htmlFor="pass" className="card-head">
                    Enter Your Password
                </label>
                <input className="form-input" type="password" id="pass" />

                <div className="forgot-pass">
                    <label htmlFor="remem" className="remem-fl">
                        <input type="checkbox" id="remem" />
                        <p className="cart-text">I accept all terms and conditions</p>
                    </label>
                </div>

                <button className="btn btn-primary">
                    Create New Account
                </button>

                <Link to="/login">
                    <div className="cart-text">Already have an Account?</div>
                </Link>
            </form>
        </div>
    )
}

export { Signup }