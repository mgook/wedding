import "./IntroPhoto.css";

export default function IntroPhoto(props) {
    return (
        <div className="IntroPhoto">
            <div className="IntroPhoto-background"/>
            <div className="IntroPhoto-container">
                <div className="IntroPhoto-type">{props.type}</div>
                <div className="IntroPhoto-name">{props.name}</div>
                <img className="IntroPhoto-photo" src={props.photo} />
            </div>
        </div>
    );
}