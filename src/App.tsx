import { useState } from "react";
// import Cart from "./components/Cart";
// import Nav from "./components/Nav";
// import Alert from "./components/Alert Button/Alert";
// import Button from "./components/Alert Button/Button";
import Table from "./components/Tables/Table";
// import Collapse from "./components/collapsed/collapse";
import Virrudhix from "./components/Virrudhxi/Virrudhix";
import Paragraph from "./components/Virrudhxi/Paragraph";
import Footer from "./components/Virrudhxi/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePerson from "./components/Forms/CreatePerson";
import AdmissionForm from "./components/Forms/AdmissionForm";
import ExpenseList from "./Expense List/ExpenseList";
import ExpenseFilter from "./Expense List/ExpenseFilter";
import StudentDetail from "./student detail/StudentDetail";


function App() {
  // const [CartItem, setCartItem] = useState(["product1", "product2"]);
  // const [visible, setVisible] = useState(false);
  const [lists, setlists] = useState([
    { 
      id: 1,
      name: "Lateef",
      fullName: "Lateef Ashraf",
      class: 3,
      address: "sopore",
    },
    {
      id: 2,
      name: "Waseem",
      fullName: "waseem altaf",
      class: 1,
      address: "sopore",
    },
    {
      id: 3,
      name: "abrar",
      fullName: "abrar hussain ",
      class: 2,
      address: "sopore",
    },
    {
      id: 4,
      name: "faizan",
      fullName: "faizan wani",
      class: 9,
      address: "sopore",
    },
    {
      id: 5,
      name: "owais",
      fullName: "owais bhat",
      class: 8,
      address: "sopore",
    },
  ]);
  const [expenses, setExpenses] = useState([
    { id: 2, Description: "bbd", Amount: 100, Category: "Utlities" },
    { id: 1, Description: "abd", Amount: 30, Category: "Entertainment" },
    { id: 3, Description: "ccd", Amount: 60, Category: "Gym" },
    { id: 4, Description: "eed", Amount: 50, Category: "childwear" },
  ]);

  const navLinks = [
    { label: "Home", link: "/" },
    { label: "About", link: "/" },
    { label: "MarketPlace", link: "/" },
    { label: "List property", link: "/" },
    { label: "Resources", link: "/" },
    { label: "expenseList", link: "/ExpenseList" },
    { label: "tables", link: "/tables" },
    { label: "create person", link: "/create-person" },
    { label: "Admission", link: "/admission" },
    { label: "students", link: "/Students" },
  ];

  const handleDelete = (id: number) => {
    setlists(lists.filter((student) => student.id !== id));
  };
  const [SelectCategory, setSelectCategory] = useState("");
  const VisibleExpenses = SelectCategory
    ? expenses.filter((e) => e.Category === SelectCategory)
    : expenses;

  return (
    <>
      <Virrudhix listsItem={navLinks} title={"Career"} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/expenseList"
            element={
              <ExpenseList
                expenses={VisibleExpenses}
                onDelete={(id) =>
                  setExpenses(expenses.filter((e) => e.id !== id))
                }
              />
            }
          />
          <Route
            path="/expenseList"
            element={
              <ExpenseFilter
                onSlectedCategory={(category) => setSelectCategory(category)}
              />
            }
          />

          <Route path="/" element={<Paragraph>dwfwf</Paragraph>} />
          <Route
            path="/tables"
            element={<Table lists={lists} onDelete={handleDelete} />}
          />
          <Route path="/create-person" element={<CreatePerson />} />
          <Route path="/admission" element={<AdmissionForm />} />
          <Route path="/students" element={<StudentDetail />} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
