import { Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";


export default function PageNotFound() {
  const { t } = useTranslation();
  return (
    <Text m="150px 40px 50px 40px" fontSize={["3xl","4xl"]}> {t('pageNotFound.parrafo')} </Text>
  )
}