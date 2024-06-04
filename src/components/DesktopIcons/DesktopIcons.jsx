import React from "react";
import { Icon, IconContainer } from "./styles";
import {
  Inetcfg2301, 
  Awfxex32Info, // Drvspace7
  FileText,
  Qfecheck111,
} from "@react95/icons"; // source: https://www.npmjs.com/package/@react95/icons

const DesktopIcons = ({ onIconClick }) => {
  const icons = [
    { name: "About Me", icon: Awfxex32Info },
    { name: "My Resume", icon: FileText },
    { name: "Projects", icon: Qfecheck111 },
    { name: "Contact Me", icon: Inetcfg2301 },
  ];

  return (
    <IconContainer>
      {icons.map(({ name, icon: IconComponent }) => (
        <Icon key={name}>
          <IconComponent
            className="pointer"
            variant="32x32_4"
            onClick={() => onIconClick(name)}
          />
          <div>{name}</div>
        </Icon>
      ))}
    </IconContainer>
  );
};

export default DesktopIcons;
