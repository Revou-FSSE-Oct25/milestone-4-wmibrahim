"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const transaction_service_1 = require("./transaction.service");
const transaction_dto_1 = require("./dto/transaction.dto");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
let TransactionController = class TransactionController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    deposit(req, dto) {
        return this.transactionService.deposit(req.user.sub, dto);
    }
    withdraw(req, dto) {
        return this.transactionService.withdraw(req.user.sub, dto);
    }
    transfer(req, dto) {
        return this.transactionService.transfer(req.user.sub, dto);
    }
    findAll(req) {
        return this.transactionService.findAll(req.user.sub);
    }
    findOne(req, id) {
        return this.transactionService.findOne(req.user.sub, id);
    }
};
exports.TransactionController = TransactionController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Deposit to account' }),
    (0, common_1.Post)('deposit'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, transaction_dto_1.DepositDto]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "deposit", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Withdraw from account' }),
    (0, common_1.Post)('withdraw'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, transaction_dto_1.WithdrawDto]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "withdraw", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Transfer between accounts' }),
    (0, common_1.Post)('transfer'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, transaction_dto_1.TransferDto]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "transfer", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List all transactions' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get transaction by id' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "findOne", null);
exports.TransactionController = TransactionController = __decorate([
    (0, swagger_1.ApiTags)('Transactions'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('transactions'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionController);
//# sourceMappingURL=transaction.controller.js.map