import classes from "./AddTeacher.module.css";
import {
  Box,
  Button,
  Container,
  FileInput,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import {
  IconAlignJustified,
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconFile,
  IconMail,
  IconPassword,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";
import { Form } from "react-router-dom";
// import { Formik } from "Formik";
import AddCourseSchema from "@pages/addCoursePage/schema/AddCourseSchema";

export default function AddTeacher() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  // function handelSubmit() {}
  //           initialValues={{
  //             firstName: "",
  //             lastName: "",
  //             email: "",
  //             phone: "",
  //             password: "",
  //             confirmPassword: "",
  //             description: "",
  //           }}
  //           validationSchema={AddCourseSchema}
  //           onSubmit={handelSubmit}
  return (
    <Box mt={80} mb={50} w={"100%"} className={classes.parent}>
      <Box display={"flex"} style={{ alignItems: "center" }}>
        {language != "English" ? (
          <IconCaretLeftFilled
            style={{ width: "30px", height: "30px", color: "rgb(62,83,160)" }}
            stroke={2.0}
          />
        ) : (
          <IconCaretRightFilled
            style={{ width: "30px", height: "30px", color: "rgb(62,83,160)" }}
            stroke={2.0}
          />
        )}

        <Text
          c={computedColorScheme == "light" ? "" : "white"}
          fw={600}
          fz={25}
        >
          {language != "English" ? "اضافة معلم" : "Add teacher"}
        </Text>
      </Box>

      <Box
        mt={30}
        mx={20}
        className={
          computedColorScheme == "light"
            ? classes.containerFormLight
            : classes.containerFormDark
        }
        style={{ borderRadius: "20px" }}
      >
        <Container pt={20} pb={20}>
          <form

          >
            <Form>
              <Box className={classes.containerField} mb={5}>
                <Box className={classes.widthField}>
                  <Box
                    mb={10}
                    display={"flex"}
                    style={{ alignItems: "center", gap: "5px" }}
                  >
                    <IconUser
                      style={{
                        color: "rgb(34,166,241)",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                    <label htmlFor="firstName" className={classes.labelField}>
                      {language != "English" ? "الاسم الاول " : "First Name"}
                    </label>
                  </Box>
                  <Box>
                    <input
                      type="text"
                      id="firstName"
                      placeholder={
                        language != "English" ? " الاسم الاول " : "First Name "
                      }
                      name="firstName"
                      required
                      className={classes.inputField}
                    />
                  </Box>
                </Box>

                <Box className={classes.widthField}>
                  <Box
                    mb={10}
                    display={"flex"}
                    style={{ alignItems: "center", gap: "5px" }}
                  >
                    <IconUser
                      style={{
                        color: "rgb(34,166,241)",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                    <label htmlFor="lastName" className={classes.labelField}>
                      {language != "English" ? "الاسم الاخير " : "Last Name "}
                    </label>
                  </Box>
                  <Box>
                    <input
                      type="text"
                      id="lastName"
                      placeholder={
                        language != "English" ? "الاسم الاخير " : "Last Name "
                      }
                      name="lastName"
                      required
                      className={classes.inputField}
                    />
                  </Box>
                </Box>
              </Box>

              <Box mt={20}>
                <Box
                  mb={10}
                  display={"flex"}
                  style={{ alignItems: "center", gap: "5px" }}
                >
                  <IconMail
                    style={{
                      color: "rgb(34,166,241)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <label htmlFor="email" className={classes.labelField}>
                    {language != "English" ? "البريد الالكتروني" : "Email"}
                  </label>
                </Box>
                <Box>
                  <input
                    type="text"
                    id="email"
                    placeholder="usename@gmail.com"
                    name="email"
                    required
                    className={classes.inputField}
                  />
                </Box>
              </Box>

              <Box mt={20}>
                <Box
                  mb={10}
                  display={"flex"}
                  style={{ alignItems: "center", gap: "5px" }}
                >
                  <IconPhone
                    style={{
                      color: "rgb(34,166,241)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <label htmlFor="phone" className={classes.labelField}>
                    {language != "English" ? " رقم الهاتف" : "Phone number"}
                  </label>
                </Box>
                <Box>
                  <input
                    type="number"
                    id="phone"
                    placeholder={
                      language != "English" ? "رقم الهاتف" : "Phone number"
                    }
                    name="phone"
                    required
                    className={classes.inputField}
                  />
                </Box>
              </Box>

              <Box mt={20} className={classes.containerField} mb={5}>
                <Box className={classes.widthField}>
                  <Box
                    mb={10}
                    display={"flex"}
                    style={{ alignItems: "center", gap: "5px" }}
                  >
                    <IconPassword
                      style={{
                        color: "rgb(34,166,241)",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                    <label htmlFor="password" className={classes.labelField}>
                      {language != "English" ? " كلمة المرور " : "Password "}
                    </label>
                  </Box>
                  <Box>
                    <input
                      type="password"
                      id="password"
                      placeholder={
                        language != "English" ? "كلمة المرور" : "Password"
                      }
                      name="password"
                      required
                      className={classes.inputField}
                    />
                  </Box>
                </Box>

                <Box className={classes.widthField}>
                  <Box
                    mb={10}
                    display={"flex"}
                    style={{ alignItems: "center", gap: "5px" }}
                  >
                    <IconPassword
                      style={{
                        color: "rgb(34,166,241)",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                    <label
                      htmlFor="ConfirmPassword"
                      className={classes.labelField}
                    >
                      {language != "English"
                        ? "  تأكيد كلمة المرور"
                        : "Confirm password "}
                    </label>
                  </Box>
                  <Box>
                    <input
                      type="password"
                      id="ConfirmPassword"
                      placeholder={
                        language != "English"
                          ? "تأكيد كلمة المرور"
                          : "Confirm password"
                      }
                      name="ConfirmPassword"
                      required
                      className={classes.inputField}
                    />
                  </Box>
                </Box>
              </Box>

              <Box mt={20}>
                <Box
                  mb={10}
                  display={"flex"}
                  style={{ alignItems: "center", gap: "5px" }}
                >
                  <IconAlignJustified
                    style={{
                      color: "rgb(34,166,241)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <label htmlFor="description" className={classes.labelField}>
                    {language != "English" ? "الوصف  " : " Description "}
                  </label>
                </Box>
                <Box>
                  <textarea
                    id="description"
                    style={{ height: "100px" }}
                    placeholder={
                      language != "English" ? "الوصف... " : "Description..."
                    }
                    name="description"
                    required
                    className={classes.inputField}
                  />
                </Box>
              </Box>

              <Box
                mt={30}
                display={"flex"}
                style={{ alignItems: "center", gap: "3px" }}
              >
                <IconFile
                  style={{
                    color: "rgb(34,166,241)",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <FileInput
                  variant="filled"
                  radius="xl"
                  placeholder={language != "English" ? "اضف صورة" : "Add image"}
                />
              </Box>
              <Box
                mt={40}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button type="submit" color="rgb(0,52,101)" px={100}>
                  {language != "English" ? "اضافة " : "Add"}
                </Button>
              </Box>
            </Form>
          </form>
        </Container>
      </Box>
    </Box>
  );
}
