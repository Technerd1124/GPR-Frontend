import { Link } from "react-router-dom";
import { ProjectCard } from '../../types/cms';

interface SinglePortfolioV1LightData {
    project: ProjectCard;
}

const SinglePortfolioV1Light: React.FC<SinglePortfolioV1LightData> = ({ project }) => {

    return (
        <>
            <div className="portfolio-style-one-item">
                <img src={`/assets/img/portfolio/${project.Project_img.image.url}`} alt="Image Not Found" width={710} height={800} />
                <div className="info">
                    <h2><Link to={`/project-details/${project.UrlToProject}`}> <strong>{project.ProjectName}</strong></Link></h2>
                    <Link className="btn-animation mt-30" to={`/project-details/${project.count_id}`}><i className="fas fa-arrow-right" /> <span>See Details</span></Link>
                </div>
            </div>
        </>
    );
};

export default SinglePortfolioV1Light;