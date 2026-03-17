const EmbedSection = () => {
  return (
    <section className="w-full bg-background">
      <iframe
        src="https://mfprestamos.lovable.app"
        className="w-full border-0"
        style={{ height: "100vh" }}
        title="MF Préstamos"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
      />
    </section>
  );
};

export default EmbedSection;
