const SEO = ({ title, description, keywords }) => {
    return (
        <>
            <title>{title} | Mazu Academy</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
        </>
    );
};

export default SEO;
