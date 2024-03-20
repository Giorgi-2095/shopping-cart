import { Button, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";

function Home() {
    const { addItem } = useCart();

    const products = [
        {
            id: 1,
            name: "Malm",
            price: 9900,
            quantity: 1
        },
        {
            id: 2,
            name: "Nordli",
            price: 16500,
            quantity: 1,
        },
        {
            id: 3,
            name: "Kullen",
            price: 4500,
            quantity: 1
        },
    ];

    return (
        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}$</td>
                            <td>
                                <Button variant="success" onClick={() => addItem(p)}>Add to cart</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Home