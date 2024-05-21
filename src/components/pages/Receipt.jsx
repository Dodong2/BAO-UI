import Navbar from "./Navbar"


const Receipt = () => {
    return (
        <>
            <Navbar />
            <div className="main-container">
                {/*-----Receipt container-----*/}
                <div className="receipt-container">
                    <div className='receipt1'>
                        <h1>Name: </h1>
                        <h1>Email: </h1>
                        <h1>Phone number: </h1>
                        <h1>Receipt #: </h1>
                        <h1>Time: </h1>
                        <h1>Date: </h1>
                    </div>
                    <div className='receipt2'>
                        <div className="receipt-title"><h1>LSPU-LB CAMPUS</h1></div><br/>
                        <div className="receipt-table">
                        <h1>Order Items</h1>
                        <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                            <h2>Total: </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Receipt
