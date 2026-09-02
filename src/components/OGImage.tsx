import { SITE_TITLE } from "../consts";

export type OGImageProps = {
  title?: string;
  description?: string;
};

function OGImage({ title, description }: OGImageProps) {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        gap: "2rem",
        height: "100%",
        justifyContent: "flex-start",
        padding: 100,
        width: "100%",
      }}
    >
      <img
        src="https://samrith.dev/logo.svg"
        width={200}
        alt="logo"
        style={{
          flexShrink: 0,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexShrink: 1,
          width: "100%",
        }}
      >
        <h1
          style={{
            fontFamily: '"redhattext"',
            fontSize: "3.5rem",
            lineHeight: "3rem",
            margin: 0,
          }}
        >
          {title || SITE_TITLE}
        </h1>
        <p
          style={{
            flexWrap: "wrap",
            fontFamily: '"redhattext"',
            fontSize: "2rem",
            marginTop: 10,
            wordWrap: "break-word",
          }}
        >
          {description || "samrith.dev"}
        </p>
      </div>
    </div>
  );
}

export function createOgImage(title?: string, description?: string) {
  return <OGImage title={title} description={description} />;
}
