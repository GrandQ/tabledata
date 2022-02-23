import { items } from "../interfaces/itemType";

const TableList = ({ items }: {items: items[]}) => {
    return(
        <div className="table-container">
                {Object.values(items).map((item: items) => (
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
    )
};

export default TableList;