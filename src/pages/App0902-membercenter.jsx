import { useState } from "react";

// 左側選單
function SidebarItem({ label, onClick, active = false, danger = false }) {
    return (
        <div className={`sidebar-item ${danger ? "danger" : ""}`}>
            <button type="button" onClick={onClick}>
                <p>{label}</p>
            </button>
        </div>
    );
}

// 我的收藏
function Favorites() {
    return <h2>我的收藏</h2>;
}

// 我的花牆
function Wall() {
    return <h2>我的花牆</h2>;
}

// 我的花訊
function News() {
    return <h2>我的花訊</h2>;
}

// 個人中心
function Profile() {
    return <h2>會員資料</h2>;
}

// 登入畫面
function SignIn({ onLogin }) {
    return (
        <div className="signin-wrap">
            <h2>登入</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onLogin(); // 假設直接登入成功
                }}
            >
                <input type="text" placeholder="帳號" required />
                <input type="password" placeholder="密碼" required />
                <button type="submit">登入</button>
            </form>
        </div>
    );
}

// 主元件
export default function MemberCenter() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeKey, setActiveKey] = useState("favorites");

    // 定義登入後可見的 TABS
    const TABS = [
        { key: "favorites", label: "我的收藏", view: <Favorites /> },
        { key: "wall", label: "我的花牆", view: <Wall /> },
        { key: "news", label: "我的花訊", view: <News /> },
        { key: "profile", label: "會員資料", view: <Profile /> },
        { key: "logout", label: "登出", danger: true },
    ];

    const handleSelect = (key) => {
        if (key === "logout") {
            setIsLoggedIn(false); // 登出
            setActiveKey("favorites"); // 重置 activeKey
        } else {
            setActiveKey(key);
        }
    };

    // 目前的頁面
    const activeTab = isLoggedIn
        ? TABS.find((t) => t.key === activeKey)
        : null;

    return (
        <section className="wrapper">
            {/* 左側選單 */}
            <div className="left-sidebar">
                {isLoggedIn &&
                    TABS.map((t) => (
                        <SidebarItem
                            key={t.key}
                            label={t.label}
                            active={activeKey === t.key}
                            danger={t.danger}
                            onClick={() => handleSelect(t.key)}
                        />
                    ))}
            </div>

            {/* 右側面板 */}
            <div className="right-panel">
                {isLoggedIn ? (
                    activeTab?.view
                ) : (
                    <SignIn onLogin={() => setIsLoggedIn(true)} />
                )}
            </div>
        </section>
    );
}
