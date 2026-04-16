declare const generate: ({ configPath }: {
    configPath?: string | undefined;
}) => Promise<void>;

export { generate };
