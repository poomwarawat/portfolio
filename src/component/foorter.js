import React from 'react'

function Footer (){
    return(
        <div>
            <div className="Footer">
                <div className="container">
                    <div className="row pt-4">
                        <div className="col-md-6">
                            <h3 className="HeadFoot">Contact</h3>
                            <div className="footcontent">
                            <p>Facebook : Cafe Story : รีวิวคาเฟ่ ทุกวัน</p>
                            <p>Instragram : Cafestoryreview</p>
                            <p>Email : cafestory@gmail.com</p>
                            <p>Phone : 09x-xxx-xxxx</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <h3 className="HeadFoot">Address</h3>
                            <div className="footcontent">
                            <p>126 Prachautij Road</p>
                            <p>Bangmod Trungkru</p>
                            <p>Bangkok 10140</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;