import Image from 'next/image'; // Import the Image component from next/image
import '../globals.css'; // Import the globals.css file

export default function Bhimavaram() {
    return (
        <div className='brm'> {/* Use the 'brm' class name */}
            <div className="navbar">
                <div className="logo">
                    <Image src="/logo.png" alt="College Logo" width={100} height={100} /> {/* Use the Image component */}
                </div>
                <nav>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact_us">Contact</a></li>
                        {/* Departments Dropdown */}
                        <div className='dropdown'>
                            <span style={{ fontSize: '15px', cursor: 'pointer' }}>Departments</span>
                            <div className='dropdown-content'>
                                <ul style={{ listStyleType: 'none' }}>
                                    <li><a href="#">CSE</a></li>
                                    <li><a href="#">IT</a></li>
                                </ul>
                            </div>
                        </div>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <div className="main-content">
                    <h1>Bhimavaram Branch</h1> {/* Change text to reflect the correct branch */}
                    <Image src="/vishnu.jpg" alt="Vishnu Educational Society" width={600} height={400} /> {/* Use the Image component */}
                    <h1>Bhimavaram Branch</h1> {/* Change text to reflect the correct branch */}
                </div>
            </div>
        </div>
    );
}
