export function getQueryStrings(
  url: string,
): Record<string, string | undefined> {
  const queryString = url.split("?")[1];
  if (!queryString) return {};

  return queryString.split("&").reduce(
    (a, p) => {
      const [key, value] = p.split("=");
      return {
        ...a,
        [key]: value ? decodeURIComponent(value) : undefined,
      };
    },
    {} as Record<string, string | undefined>,
  );
}
