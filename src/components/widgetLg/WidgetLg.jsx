
import "./widgetLg.css"
export default function WidgetLg() {
    const Button = ({type})=>{
        return <button className={"widgetLgButton " + type}>{type}</button>;
    }
    return (
        <div className="widgetLg">
            <span className="widgetLgTitle">Latest Transactions</span>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser"> <img src="https://media-exp1.licdn.com/dms/image/C5103AQH3Nm1XmbGN3g/profile-displayphoto-shrink_800_800/0/1573520386010?e=1638403200&v=beta&t=CSBBI1La0-3fhiDYZ7MNsDzdNydO0IIxME3byrWQisQ" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">
                    Bilen cekic
                    </span>                    
                   </td>
                    <td className="widgetLgDate"> 29 Sept 2022</td>
                    <td className="widgetLgAmount"> $150</td>
                    <td className="widgetLgStatus"> <Button type="Approved" /></td>
                    
                    
                </tr>

              
                <tr className="widgetLgTr">
                    <td className="widgetLgUser"> <img src="https://media-exp1.licdn.com/dms/image/C5103AQH3Nm1XmbGN3g/profile-displayphoto-shrink_800_800/0/1573520386010?e=1638403200&v=beta&t=CSBBI1La0-3fhiDYZ7MNsDzdNydO0IIxME3byrWQisQ" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">
                    Bilen cekic
                    </span>                    
                   </td>
                    <td className="widgetLgDate"> 29 Sept 2022</td>
                    <td className="widgetLgAmount"> $150</td>
                    <td className="widgetLgStatus"> <Button type="Declined" /></td>
                    
                    
                </tr>

              
                <tr className="widgetLgTr">
                    <td className="widgetLgUser"> <img src="https://media-exp1.licdn.com/dms/image/C5103AQH3Nm1XmbGN3g/profile-displayphoto-shrink_800_800/0/1573520386010?e=1638403200&v=beta&t=CSBBI1La0-3fhiDYZ7MNsDzdNydO0IIxME3byrWQisQ" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">
                    Bilen cekic
                    </span>                    
                   </td>
                    <td className="widgetLgDate"> 29 Sept 2022</td>
                    <td className="widgetLgAmount"> $150</td>
                    <td className="widgetLgStatus"> <Button type="Pending" /></td>
                    
                    
                </tr>

            
                <tr className="widgetLgTr">
                    <td className="widgetLgUser"> <img src="https://media-exp1.licdn.com/dms/image/C5103AQH3Nm1XmbGN3g/profile-displayphoto-shrink_800_800/0/1573520386010?e=1638403200&v=beta&t=CSBBI1La0-3fhiDYZ7MNsDzdNydO0IIxME3byrWQisQ" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">
                    Bilen cekic
                    </span>                    
                   </td>
                    <td className="widgetLgDate"> 29 Sept 2022</td>
                    <td className="widgetLgAmount"> $150</td>
                    <td className="widgetLgStatus"> <Button type="Approved" /></td>
                    
                    
                </tr>

             
                <tr className="widgetLgTr">
                    <td className="widgetLgUser"> <img src="https://media-exp1.licdn.com/dms/image/C5103AQH3Nm1XmbGN3g/profile-displayphoto-shrink_800_800/0/1573520386010?e=1638403200&v=beta&t=CSBBI1La0-3fhiDYZ7MNsDzdNydO0IIxME3byrWQisQ" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">
                    Bilen cekic
                    </span>                    
                   </td>
                    <td className="widgetLgDate"> 29 Sept 2022</td>
                    <td className="widgetLgAmount"> $150</td>
                    <td className="widgetLgStatus"> <Button type="Approved" /></td>
                    
                    
                </tr>
            </table>
        </div>
    )
}
