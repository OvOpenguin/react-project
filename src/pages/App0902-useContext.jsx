import React, { useContext, useState } from "react";
import { createContext } from "react";

const App0902 = () => {
    // 建立一個空的共用區(可以跨元件使用) => 跨元件好處：放入共用區後，只取想使用的變數即可。
    // const Context = React.createContext();
    const UserContext = createContext({});
    // 建立按鈕控制變數
    const [isLogin, setIsLogin] = useState(false);
    // 建立登入控制變數
    const [user, setUser] = useState("demo");


    //登入元件
    const LoginForm = () => {
        // 取用共用區的屬性和方法
        const { user, setUser, setIsLogin } = useContext(UserContext);
        return (
            <>
                <label htmlFor="username">使用者名稱</label>
                <input
                    type="text"
                    id="username"
                    placeholder="請輸入使用者名稱"
                    value={user}
                    onChange={(e) => { setUser(e.target.value) }} />

                <button
                    type="button"
                    onClick={() => { setIsLogin(true) }}
                >登入</button>
            </>

        )

    }

    // 歡迎元件
    const Greeting = () => {
        // 取得共用區UserContext的user
        const { user } = useContext(UserContext);
        return (
            <div>
                Hi, {user}
            </div>
        )
    }


    return (
        <div>
            <h1>useContext 跨元件使用變數與函式</h1>
            <hr style={{ marginBottom: "50px" }} />
            <UserContext.Provider value={{ user, setUser, isLogin, setIsLogin }}>
                {
                    isLogin ? <Greeting /> : <LoginForm />
                }
            </UserContext.Provider>
        </div>
    )
}

export default App0902