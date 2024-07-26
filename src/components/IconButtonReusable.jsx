import { IconButton } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function IconButtonReusable({ icon, href, colorHover }) {
  return (
    <IconButton
      bg="none"
      className="animate-top"
      _hover={{ color: colorHover }}
      _active={"none"}
      icon={icon}
      color="white"
      onClick={() => window.open(href, "_blank")}
    />
  );
}

export default IconButtonReusable;
