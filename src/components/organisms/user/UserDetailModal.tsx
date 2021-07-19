import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";
import { memo, useEffect, useState, VFC } from "react";

import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  isAdmin?: boolean;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, onClose, isAdmin } = props;

  // const [username, setUsername] = useState("");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");

  // useEffect(() => {
  //   setUsername(user?.username ?? "");
  //   setName(user?.name ?? "");
  //   setEmail(user?.email ?? "");
  //   setPhone(user?.phone ?? "");
  // }, [user]);

  const onClickUpdate = () => alert("更新");
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInRight"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={user?.username} isReadOnly={!isAdmin} />
              <FormLabel>フルネーム</FormLabel>
              <Input value={user?.name} isReadOnly={!isAdmin} />
              <FormLabel>MAIL</FormLabel>
              <Input value={user?.email} isReadOnly={!isAdmin} />
              <FormLabel>TEL</FormLabel>
              <Input value={user?.phone} isReadOnly={!isAdmin} />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
