import { Flex, Spacer, Link, Box, Text } from "@chakra-ui/react"
import { Gap } from '../Gap';
import { ActionButtonWallet } from './ActionButtonWallet';
import { ActionButtonOrders } from './ActionButtonOrders';

export function ActionButtons() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
    >
      <ActionButtonWallet
        id="popover-wallet"
        label="Wallet"
      />

      <Gap.Horizontal preset="sm" />

      <ActionButtonOrders
        id="popover-orders"
        label="Orders"
      />
    </Flex>
  );
}
