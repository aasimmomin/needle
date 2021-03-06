import { IConfiguration, IExternalResolutionConfiguration } from '../contracts/contracts';

/**
 * Configuration class used for handling global container settings and behavioral flags
 */
export class Configuration implements IConfiguration {
    /**
     * Gets the current max tree depth depth
     */
    public get maxTreeDepth(): number {
        return this._maxTreeDepth;
    }

    /**
     * Sets the limit on how deep the dependency graph tree can go.
     */
    public set maxTreeDepth(value: number) {
        this._maxTreeDepth = value;
    }

    /**
     * Gets the external type resolver if one has been registered
     */
    public get externalResolutionStrategy(): IExternalResolutionConfiguration | undefined {
        return this._externalResolutionStrategy;
    }

    /**
     * Sets the type resolver to an external implementation. Delegates all construction and caching to that container
     */
    public set externalResolutionStrategy(value: IExternalResolutionConfiguration | undefined) {
        this._externalResolutionStrategy = value;
    }

    /**
     * Gets the flag indicating if duplicate tokens should be allowed.
     * @default false
     */
    public get allowDuplicateTokens(): boolean {
        return this._allowDuplicateTokens;
    }

    /**
     * Sets the flag to signal to the injector that duplicate tokens are either allowed or restricted
     */
    public set allowDuplicateTokens(value: boolean) {
        this._allowDuplicateTokens = value;
    }

    /**
     * Gets the flag indicating if metrics tracking is enabled
     * @default false
     */
    public get trackMetrics(): boolean {
        return this._trackMetrics;
    }

    /**
     * Sets the flag to signal if metrics tracking is enabled
     */
    public set trackMetrics(value: boolean) {
        this._trackMetrics = value;
    }

    private _maxTreeDepth = 100;
    private _externalResolutionStrategy: IExternalResolutionConfiguration | undefined;
    private _allowDuplicateTokens = false;
    public _trackMetrics = true;

    /**
     * Resets the configuration back to its default state
     */
    public reset(): void {
        this.maxTreeDepth = 500;
        this.externalResolutionStrategy = undefined;
        this.allowDuplicateTokens = false;
        this._trackMetrics = false;
    }
}
