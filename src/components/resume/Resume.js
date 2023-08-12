import styles from './Resume.css';
import AppContext from '../../AppContext.js';

const TechnicalResume = () => {
    return (
        <div className='resume__outer_container'>
            <div className='resume__row_one'>
                <h2 className='resume__header_text'>
                    RESUME
                </h2>
                <p className='resume__skills_area'>
                    <h3>Strong:</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML/SCSS/CSS</li>
                        <li>Bootstrap</li>
                        <li>Bulma</li>
                        <li>Git</li>
                    </ul>
                </p>
                <p className='resume__skills_area_two'>
                    <h3>Experienced:</h3>
                    <ul>
                        <li>C#</li>
                        <li>SQL</li>
                        <li>Python</li>
                        <li>Django</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                    </ul>
                </p>
            </div>
            <div className='resume__row_two'>
                <p className='resume__text_two'>
                    Dolor sit amet consectetur adipiscing elit duis tristique. Sed augue lacus viverra 
                    vitae congue eu consequat ac felis. Tempor nec feugiat nisl pretium. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Id 
                    ornare arcu odio ut sem nulla. Nam aliquam sem et tortor consequat id. Morbi enim nunc faucibus a pellentesque. Sem nulla pharetra diam sit. 
                    Aliquam nulla facilisi cras fermentum odio eu feugiat. 
                </p>
                <p className='resume__text_three'>
                    Aliquet lectus proin nibh nisl condimentum id. Ac feugiat sed lectus vestibulum mattis 
                    ullamcorper. Gravida cum sociis natoque penatibus et. Risus ultricies tristique nulla aliquet enim tortor at. Arcu bibendum at varius vel 
                    pharetra. Pellentesque habitant morbi tristique senectus et.
                </p>
            </div>
        </div>
    )
}

export default TechnicalResume;