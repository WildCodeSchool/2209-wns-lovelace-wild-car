const { NODE_ENV, DATABASE_URL, TEST_DATABASE_URL } = process.env;

const IS_PRODUCTION = NODE_ENV === "production";

export { NODE_ENV, DATABASE_URL, TEST_DATABASE_URL, IS_PRODUCTION };