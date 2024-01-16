import { AVATAR_DROPDOWN_MENU_SETTINGS } from "@/constants/avatar-menu.constants";
import { SettingType } from "@/enums/enums";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import avatarSrc from "../../assets/avatar-default-icon.jpg";

interface IAvatarMenuProps {
  onLogoutClick: () => void;
}
const AvatarMenu = (props: IAvatarMenuProps) => {
  const { onLogoutClick } = props;
  const [anchorElUser, setAnchorElUser] = useState<Maybe<HTMLElement>>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting: SettingType) => () => {
    setAnchorElUser(null);
    if (setting === SettingType.Logout) {
      onLogoutClick();
    }
  };

  return (
    <>
      <Tooltip title="Open Settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={avatarSrc} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={!!anchorElUser}
        onClose={handleCloseUserMenu}
      >
        {AVATAR_DROPDOWN_MENU_SETTINGS.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu(setting)}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default AvatarMenu;
