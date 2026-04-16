declare const validate: ({ configPath }: {
    configPath?: string | undefined;
}) => Promise<boolean | undefined>;

export { validate };
