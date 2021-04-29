/// <reference types="node" />
import * as CWC from 'crypto-wallet-core';
import { EventEmitter } from 'events';
import { Utils } from './common';
import { Credentials } from './credentials';
import { Key } from './key';
import { Masternode } from './masternode';
import { PayPro } from './paypro';
import { PayProV2 } from './payproV2';
import { Verifier } from './verifier';
export declare class API extends EventEmitter {
    doNotVerifyPayPro: any;
    timeout: any;
    logLevel: any;
    supportStaffWalletId: any;
    request: any;
    credentials: any;
    notificationIncludeOwn: boolean;
    lastNotificationId: any;
    notificationsIntervalId: any;
    keyDerivationOk: boolean;
    noSign: any;
    password: any;
    bp_partner: string;
    bp_partner_version: string;
    static PayProV2: typeof PayProV2;
    static PayPro: typeof PayPro;
    static Key: typeof Key;
    static Verifier: typeof Verifier;
    static Core: typeof CWC;
    static Utils: typeof Utils;
    static sjcl: any;
    static errors: any;
    static Masternode: typeof Masternode;
    static Vircle: any;
    constructor(opts?: any);
    static privateKeyEncryptionOpts: {
        iter: number;
    };
    initNotifications(cb: any): void;
    initialize(opts: any, cb: any): any;
    dispose(cb: any): void;
    _fetchLatestNotifications(interval: any, cb: any): void;
    _initNotifications(opts: any): void;
    _disposeNotifications(): void;
    setNotificationsInterval(notificationIntervalSeconds: any): void;
    getRootPath(): any;
    static _encryptMessage(message: any, encryptingKey: any): any;
    _processTxNotes(notes: any): void;
    _processTxps(txps: any): void;
    validateKeyDerivation(opts: any, cb: any): any;
    toObj(): any;
    toString(opts: any): any;
    fromObj(credentials: any): void;
    fromString(credentials: any): void;
    decryptBIP38PrivateKey(encryptedPrivateKeyBase58: any, passphrase: any, opts: any, cb: any): any;
    getBalanceFromPrivateKey(privateKey: any, coin: any, cb: any): void;
    buildTxFromPrivateKey(privateKey: any, destinationAddress: any, opts: any, cb: any): any;
    openWallet(opts: any, cb: any): any;
    static _buildSecret(walletId: any, walletPrivKey: any, coin: any, network: any): string;
    static parseSecret(secret: any): {
        walletId: string;
        walletPrivKey: any;
        coin: any;
        network: string;
    };
    static getRawTx(txp: any): any;
    _getCurrentSignatures(txp: any): {
        signatures: any;
        xpub: any;
    }[];
    _addSignaturesToBitcoreTxBitcoin(txp: any, t: any, signatures: any, xpub: any): void;
    _addSignaturesToBitcoreTx(txp: any, t: any, signatures: any, xpub: any): void;
    _applyAllSignatures(txp: any, t: any): void;
    _doJoinWallet(walletId: any, walletPrivKey: any, xPubKey: any, requestPubKey: any, copayerName: any, opts: any, cb: any): void;
    isComplete(): any;
    _extractPublicKeyRing(copayers: any): any[];
    getFeeLevels(coin: any, network: any, cb: any): void;
    getVersion(cb: any): void;
    _checkKeyDerivation(): boolean;
    createWallet(walletName: any, copayerName: any, m: any, n: any, opts: any, cb: any): any;
    joinWallet(secret: any, copayerName: any, opts: any, cb: any): any;
    recreateWallet(cb: any): void;
    _processWallet(wallet: any): void;
    _processStatus(status: any): void;
    getNotifications(opts: any, cb: any): void;
    getStatus(opts: any, cb: any): void;
    getPreferences(cb: any): void;
    savePreferences(preferences: any, cb: any): void;
    fetchPayPro(opts: any, cb: any): void;
    getUtxos(opts: any, cb: any): void;
    getCoinsForTx(opts: any, cb: any): void;
    _getCreateTxProposalArgs(opts: any): any;
    createTxProposal(opts: any, cb: any, baseUrl: any): void;
    publishTxProposal(opts: any, cb: any): void;
    createAddress(opts: any, cb: any): any;
    getMainAddresses(opts: any, cb: any): void;
    getBalance(opts: any, cb: any): any;
    getTxProposals(opts: any, cb: any): void;
    getPayPro(txp: any, cb: any): any;
    getPayProV2(txp: any): Promise<any>;
    pushSignatures(txp: any, signatures: any, cb: any, base: any): any;
    signTxProposalFromAirGapped(txp: any, encryptedPkr: any, m: any, n: any, password: any): void;
    static signTxProposalFromAirGapped(key: any, txp: any, unencryptedPkr: any, m: any, n: any, opts: any, cb: any): any;
    rejectTxProposal(txp: any, reason: any, cb: any): void;
    broadcastRawTx(opts: any, cb: any): void;
    _doBroadcast(txp: any, cb: any): void;
    broadcastTxProposal(txp: any, cb: any): void;
    removeTxProposal(txp: any, cb: any): void;
    getTxHistory(opts: any, cb: any): void;
    getTx(id: any, cb: any): void;
    startScan(opts: any, cb: any): void;
    addAccess(opts: any, cb: any): void;
    getTxNote(opts: any, cb: any): void;
    editTxNote(opts: any, cb: any): void;
    getTxNotes(opts: any, cb: any): void;
    getFiatRate(opts: any, cb: any): void;
    pushNotificationsSubscribe(opts: any, cb: any): void;
    pushNotificationsUnsubscribe(token: any, cb: any): void;
    txConfirmationSubscribe(opts: any, cb: any): void;
    txConfirmationUnsubscribe(txid: any, cb: any): void;
    getSendMaxInfo(opts: any, cb: any): void;
    getEstimateGas(opts: any, cb: any): void;
    getStatusByIdentifier(opts: any, cb: any): void;
    _oldCopayDecrypt(username: any, password: any, blob: any): any;
    getWalletIdsFromOldCopay(username: any, password: any, blob: any): any[];
    static upgradeCredentialsV1(x: any): {
        key: any;
        credentials: Credentials;
    };
    static upgradeMultipleCredentialsV1(oldCredentials: any): {
        keys: any[];
        credentials: any[];
    };
    static serverAssistedImport(opts: any, clientOpts: any, callback: any): void;
    simplexGetQuote(data: any): Promise<any>;
    simplexPaymentRequest(data: any): Promise<any>;
    simplexGetEvents(data: any): Promise<any>;
    getMasternodeCollateral(opts: any, cb: any): any;
    removeMasternodes(opts: any, cb: any): any;
    getMasternodes(opts: any, cb: any): any;
    getMasternodeStatus(opts: any, cb: any): any;
    broadcastMasternode(opts: any, cb: any): any;
    getMasternodePing(opts: any, cb: any): any;
    signMasternode(opts: any, cb: any): any;
    isValidAddress(opts: any, cb: any): any;
    createReward(opts: any, cb: any): void;
}
//# sourceMappingURL=api.d.ts.map