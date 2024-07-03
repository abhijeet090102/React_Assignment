import Profile from './Profilecss.css'
function Profilecard (props){
    const {user, userema,useradd} = props;
    return (
        <>
            <div className="profilecard">
                <h1 className="hedProfile">Users Profile</h1>
                <h4>User Name :{user}</h4>
                <p>Email : {userema}</p>
                <p>Address : {useradd.state} {useradd.city} {useradd.street} {useradd.zip}
                </p>
            </div>
        </>
    )
    
}
export default Profilecard;