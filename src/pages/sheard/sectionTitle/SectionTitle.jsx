

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center mb-12">
            <p className="text-[#D99904]">{subHeading}</p>
            <h3 className="text-3xl uppercase border-y-4 border-[#E8E8E8] py-5 mt-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;