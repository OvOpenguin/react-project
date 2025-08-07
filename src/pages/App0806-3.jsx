import Employee from "../components/Employee"

//建立{物件}資料
const emplpoyee = {
    emp1: {
        name: '員工1',
        age: '21'
    },
    emp2: {
        name: '員工2',
        age: '22'
    },
    emp3: {
        name: '員工3',
        age: '23'
    },
}

// 建立[陣列]物件資料
const arrEmployees = [
    {
        id: 1,
        name: "員工1",
        age: "21",
        h: 160,
        w: 50
    },
    {
        id: 2,
        name: "員工2",
        age: "22",
        h: 170,
        w: 52
    },
    {
        id: 3,
        name: "員工3",
        age: "23",
        h: 150,
        w: 53
    },
]



const App = () => {
    return (
        <div>
            <h1>員工資料</h1>
            {/* 呼叫員工元件，使用[陣列]物件資料:搭配map */}
            {
                arrEmployees.map((emp) => {
                    return (
                        <Employee name={emp.name} age={emp.age} h={emp.h} w={emp.w} />
                    )
                })
            }

            {/*呼叫員工元件，使用{物件}資料。*/}
            {/* <Employee name={emplpoyee.emp1.name} age={emplpoyee.emp1.age}></Employee>
            <Employee name={emplpoyee.emp2.name} age={emplpoyee.emp2.age}></Employee>
            <Employee name={emplpoyee.emp3.name} age={emplpoyee.emp3.age}></Employee> */}

            {/* 呼叫員工元件，使用固定值。 內有兩個參數，將參數傳回元件
            <Employee name='員工1' age='21'/>
            <Employee name='員工2' age='22'/>
            <Employee name='員工3' age='31'/> */}
        </div>
    )
}

export default App