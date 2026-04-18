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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferDto = exports.WithdrawDto = exports.DepositDto = void 0;
const class_validator_1 = require("class-validator");
class DepositDto {
}
exports.DepositDto = DepositDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DepositDto.prototype, "accountId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], DepositDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DepositDto.prototype, "description", void 0);
class WithdrawDto {
}
exports.WithdrawDto = WithdrawDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], WithdrawDto.prototype, "accountId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], WithdrawDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WithdrawDto.prototype, "description", void 0);
class TransferDto {
}
exports.TransferDto = TransferDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TransferDto.prototype, "fromAccountId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TransferDto.prototype, "toAccountId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], TransferDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TransferDto.prototype, "description", void 0);
//# sourceMappingURL=transaction.dto.js.map