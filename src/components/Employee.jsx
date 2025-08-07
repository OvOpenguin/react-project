

// 建立員工元件
// 解構props => 參數放大括號{}內
const Employee = ({ name, age, h, w }) => {
    return (
        <div className="emp">
            <h2>姓名:{name}</h2>
            <p>年齡：{age}</p>
            <p>身高：{h}</p>
            <p>體重：{w}</p>
            <p>BMI：{(w/Math.pow(h/100,2)).toFixed(1)}</p>
        </div>
    )
}

export default Employee