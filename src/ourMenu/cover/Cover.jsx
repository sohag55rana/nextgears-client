import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-500}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-shadow-orange-400">{title}</h1>
                        <p className="mb-5 text-xl">
                            {description}
                        </p>

                    </div>
                </div>
            </div>
        </Parallax>


    );
};

export default Cover;