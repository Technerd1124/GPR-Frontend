import { useEffect, useState } from 'react';
import ProcessV1Data from '../../../src/assets/jsonData/process/ProcessV1Data.json';
import SingleProcessV1 from './SingleProcessV1';
import { Slide2Data } from '../../types/cms';
import { getExpertise } from '../../api/strapi';

interface DataType {
    sectionClass?: string
}


const ProcessV1 = ({ sectionClass }: DataType) => {

    const [expertise, setExpertise] = useState<Slide2Data | null>(null);

    useEffect(() => {
        const fetchSlide21Data = async () => {
            try {
                const res = await getExpertise();
                setExpertise(res.data);
            } catch (err) {
                console.error("Error fetching Slider 2:", err);
            }
        };


        fetchSlide21Data();
    }, []);

    if (!expertise) return null;
    return (
        <>
            <div className={`process-style-one-items ${sectionClass ? sectionClass : ""}`}>
                <div className="row">

                    {expertise.sectionData.map((item) => (
                        <div className="col-lg-3 col-md-6 process-style-one-item" key={item.id}>
                            <SingleProcessV1 process={item} />
                        </div>
                    ))}


                </div>
            </div>
        </>
    );
};

export default ProcessV1;