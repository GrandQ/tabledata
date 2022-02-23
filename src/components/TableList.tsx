import React, { useState } from "react";
import { items } from "../interfaces/itemType";

const TableList = ({ items }: {items: items[]}) => {
    const [search, setSearch] = useState("");
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    const handleSearchFilter = ((val: items) => {
        if (search === "") return val
        else if (val.description.toLowerCase().includes(search.toLowerCase())) return val
    })
    return(
        <div className="main">
            <input type="text" placeholder="Search..." onChange={handleSearch} />
            <div className="table-container">
                    {Object.values(items).filter(handleSearchFilter).map((item: items) => (
                        <div key={item.work_order_id} className="table-wrapper">
                            <ul key={2}>
                                <li key={3} className="flexRow">{item.work_order_id}</li>
                                <li key={4} className="flexRow desc">{item.description}</li>
                                <li key={5} className="flexRow">{item.received_date}</li>
                                <li key={6} className="flexRow">{item.assigned_to.person_name}</li>
                                <li key={7} className="flexRow">{item.status}</li>
                                <li key={8} className="flexRow">{item.priority}</li>
                            </ul>
                        </div>
                    ))}
            </div>
        </div>
    )
};

export default TableList;