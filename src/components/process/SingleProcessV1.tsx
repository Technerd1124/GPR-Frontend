import { SectionData } from "../../types/cms";

interface SingleProcessV1Props {
    process: SectionData;
}

const SingleProcessV1 = ({ process }: SingleProcessV1Props) => {
    return (
        <div className="item">
            <div className="icon">
                <img
                    src={`/assets/img/icon/default.png`}
                    alt="image not found"
                    width={200}
                    height={230}
                />
            </div>
            <h4>{process.title}</h4>
            <p>{process.Description}</p>
        </div>
    );
};

export default SingleProcessV1;
