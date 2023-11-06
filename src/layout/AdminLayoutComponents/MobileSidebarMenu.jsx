/* eslint-disable react/prop-types */
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  TvIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function MobileSidebarMenu({ setMenu, menu }) {
  return (
    <Card className="h-full z-50 w-full md:max-w-[20rem] p-4 rounded-none shadow-xl shadow-blue-gray-900/5">
      <List>
        <Link onClick={() => setMenu(!menu)} target="_blank" to={`/`}>
          <ListItem>
            <ListItemPrefix>
              <TvIcon className="h-5 w-5"></TvIcon>
            </ListItemPrefix>
            Live Site
          </ListItem>
        </Link>

        <Link onClick={() => setMenu(!menu)} to={`/admin-panel`}>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>

        <Link onClick={() => setMenu(!menu)} to={`/admin-panel/orders`}>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Orders
          </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
