import { FaPlus, FaShare } from "react-icons/fa";
function Card(props) {
    return (
        <div className='card'>
            <div className='card_body'>
                <img src={props.img} class="card_img" />
                
                <div className="around_body">
                <div className='body_color'>

                    <div className='text_body'>
                        <p className='card_title'>{props.title}</p>
                        <p className='card_title'>{props.subtitle}</p>
                    </div>
                    <div className="card_footer">
                    <p className='card_price'>
                        {props.price}
                    </p>
                    <FaPlus className='icon' /><FaShare className='icon' /></div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Card;