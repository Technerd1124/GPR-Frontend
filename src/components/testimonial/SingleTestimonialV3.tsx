import { MEDIA_URL } from '../../api/strapi';
import { Testimonial } from '../../types/cms';
import RatingsStar from '../utilities/RatingsStar';

interface DataType {
    id?: number;
    ratings?: any;
    text?: string;
    avatar?: string;
    name?: string;
    designation?: string;
}
type Props = {
    testimonial: Testimonial;

};
const SingleTestimonialV3: React.FC<Props> = ({ testimonial }) => {

    return (
        <>
            <div className="testimonial-style-three-item">
                <div className="tes-rating">
                    <span className='me-3'>{testimonial.rating}</span>
                    <div className="icon">
                        <RatingsStar ratings={testimonial.rating} />
                    </div>
                </div>
                <p>{testimonial.quote}</p>
                <div className="tm-provider">
                    <div className="thumb">
                        <img src={`${MEDIA_URL}${testimonial.avatar.url}`} alt="Image Not Found" width={200} height={200} />
                    </div>
                    <div className="content">
                        <h4>{testimonial.authorName}</h4>
                        <span>{testimonial.authorTitle}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV3;