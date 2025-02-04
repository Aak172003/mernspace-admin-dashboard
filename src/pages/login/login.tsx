import { Alert, Button, Card, Checkbox, Flex, Form, Input, Layout, Space } from "antd"
import { LockFilled, LockOutlined, UserOutlined } from '@ant-design/icons'

import { Logo } from "../../components/icons/Logo"
import { useMutation } from "@tanstack/react-query"
import { Credentials } from "types"
import { login } from "../../http/api"

const loginUser = async (credentials: Credentials) => {
    console.log("this is user data -------------------- ")
    console.log("userdata username ============= ", credentials?.email)

    console.log("user data password", credentials.password)


    // const { data } = await login(credentials)
    const response = await login(credentials)

    console.log("response ::::::::::::::; ", response)


    console.log("response?.data ::::::::::::::::::::::::::::::: ", response?.data)
    return response?.data
}
const LoginPage = () => {

    // req krne se response aane tk ke time me isPending true hota hai , then false hojata 
    const { mutate, data, isPending, isError, error } = useMutation({
        // this is used for caching 
        mutationKey: ['login'],
        mutationFn: loginUser,
        onSuccess: async () => {
            console.log("Login Successfully")
        }
    })


    console.log("22222222222222222222222222", data)
    return (
        <Layout style={{ height: "100vh", display: 'grid', placeItems: 'center' }}>
            <Space direction="vertical" align="center" size="large">
                {/* Logo Compoenent */}
                <Layout.Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Logo />
                </Layout.Content>

                {/* Login Form  */}
                <Card bordered={false}
                    style={{ width: 300 }}
                    title={
                        <Space style={{ width: "100%", fontSize: 16, justifyContent: 'center' }}>
                            <LockFilled />
                            Sign In
                        </Space>
                    }
                >

                    <Form initialValues={{ remember: true }}
                        onFinish={
                            // receives those value which fill in the form 
                            (values) => {
                                console.log("Values ------------------------ ", values)
                                // jo object hum yaha se bhejenge , wo hume mutation function me receive hojaega 
                                mutate({ email: values.username, password: values.password })
                            }}
                    >


                        {isError &&
                            <Alert
                                style={{ marginBottom: 24 }}
                                type="error"
                                message={error?.message}
                            />
                        }
                        <Form.Item name="username" rules={[
                            {
                                required: true,
                                message: "Please input your username"
                            },
                            {
                                type: "email",
                                message: "Email is not valid"
                            }
                        ]}>
                            <Input prefix={<UserOutlined />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item name="password" rules={[
                            {
                                required: true,
                                message: "Please input your password"
                            }
                        ]}>
                            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                        </Form.Item>

                        <Flex justify="space-between" >
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Remember me </Checkbox>
                            </Form.Item>
                            <a href="#" id="login-form-forgot">Forgot Password</a>
                        </Flex>
                        <Form.Item>
                            <Button type="primary" htmlType="submit"
                                style={{ width: "100%" }}
                                loading={isPending}

                            >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Space>
        </Layout >

    )
}

export default LoginPage